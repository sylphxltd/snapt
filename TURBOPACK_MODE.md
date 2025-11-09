# Turbopack Mode Status - Silk 3.1.0 (Updated after package refresh)

## Current Issue

Turbopack mode with `turbopack: true` config **cannot transform `css()` calls at runtime**.

### Error
```
Error: @sylphx/silk: css() should be transformed at build-time by @sylphx/babel-plugin-silk
```

### Root Cause
- Turbopack uses SWC, not Babel
- Silk doesn't have an SWC plugin for Turbopack yet
- `turbopack: true` flag tells withSilk() to skip webpack plugin injection
- Without transformation plugin, `css()` calls remain untransformed

## Technical Investigation

### silk-nextjs@3.1.0 withSilk() behavior:
```javascript
// Lines 74-84 in dist/index.js
webpack(config, options) {
    // If user explicitly enabled turbopack mode, skip plugin
    if (enableTurbopack === true) {
        if (debug) {
            console.log('[Silk] Turbopack mode explicitly enabled, skipping webpack plugin');
        }
        return config;  // ← No transformation!
    }
    // Otherwise inject SilkWebpackPlugin
}
```

### With `turbopack: true`:
1. ✅ Next.js uses Turbopack bundler
2. ✅ --turbo flag works
3. ✅ CLI generates silk.generated.css
4. ✅ CSS file imported in layout.tsx
5. ❌ **BUT** `css()` calls in page.tsx not transformed → runtime error

## Attempted Configurations

### ❌ Config 1: turbopack: true + no Babel
```javascript
// next.config.mjs
withSilk({ reactStrictMode: true, turbopack: {} }, { turbopack: true })

// No .babelrc
// predev: "silk generate"
```
**Result**: Server starts, but 500 error on page load - css() not transformed

### ❌ Config 2: turbopack: true + empty turbopack config
```javascript
withSilk({ reactStrictMode: true, turbopack: {} }, { turbopack: true })
```
**Result**: Same error - transformation missing

### ❌ Config 3: No turbopack flag, relying on auto-detect
```javascript
withSilk({ reactStrictMode: true }, { srcDir: './app' })
// next dev (default Turbopack)
```
**Result**: webpack config conflict - withSilk adds webpack() function

### ✅ Config 4: Webpack mode (working)
```javascript
withSilk({ reactStrictMode: true }, { srcDir: './app' })
// .babelrc with babel-plugin-silk
// next dev --webpack
```
**Result**: Works perfectly, but uses webpack not Turbopack

## Conclusion

**Turbopack mode is NOT functional in Silk 3.1.0 for applications using `css()` runtime API.**

Turbopack mode only works if:
1. You use CLI-generated CSS only
2. You **don't** have any `css()` calls in your components
3. All styles are pre-generated and imported as static CSS

For Snapt project (which uses `css()` extensively in page.tsx):
- **Must use webpack mode with Babel plugin**
- Turbopack requires SWC plugin (not yet implemented by Silk team)

## Package Update Test (After "全部silk packages更新")

Updated all @sylphx packages to latest:
- @sylphx/silk@2.1.0 (already latest)
- @sylphx/silk-nextjs@3.1.0 (already latest)
- @sylphx/silk-react@2.0.2 (already latest)
- @sylphx/silk-cli@1.0.2 (already latest)

**Result**: Same error persists.

### SWC Plugin Discovery

Found `swc_plugin_silk.wasm` in `node_modules/@sylphx/silk-nextjs/dist/`

BUT: withSilk() function doesn't configure it for Turbopack. When `turbopack: true`:
- Line 76-84: Just skips webpack plugin injection
- No SWC plugin configuration added to Next.js config
- No experimental.turbopack.rules setup

### Documentation vs Implementation Gap

README shows Turbopack mode requires:
1. CLI generation (predev/prebuild scripts) ✅ We have this
2. Import physical CSS file in layout ✅ We have this
3. **NO `css()` calls in components** ❌ page.tsx uses css() extensively

README example for Turbopack mode:
```typescript
// app/layout.tsx
import '../src/silk.generated.css'  // Physical file, no virtual module
```

NOT:
```typescript
const styles = css({ ... })  // This requires transformation
```

## Conclusion After Testing Latest Packages

**Turbopack mode in Silk 3.1.0 is CLI-ONLY mode:**
- ✅ Works: Pre-generated CSS with static class names
- ❌ Broken: Runtime `css()` calls (no transformation)
- SWC plugin exists but not integrated into withSilk() config

**For Snapt project (uses css() in page.tsx):**
- Must use webpack mode with Babel plugin
- OR refactor page.tsx to use only pre-generated classes
- Turbopack with `css()` not supported yet
