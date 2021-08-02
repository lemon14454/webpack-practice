## Webpack 是什麼

因為瀏覽器只看得懂 html, css, JS 所以我們要透過打包工具將我們的插件轉換成
這三種語言。平常比較少接觸是因為像 React 有 Create React App 這種 cli
工具幫助我們建立專案，但使用它的缺點是若要加入一些客製化的設定會比較困難，而
且預設產生出來的檔案自帶了許多套件，若沒有使用到的話就會造成資源浪費，所以除非
是為了快速產生非正式上線專案，還是建議用 webpack 自己建立會比較好。

- Webpack
  - babel => 加強對 JS 處理，可以使用新的 JS 寫法
  - PostCss => 加強對 CSS 處理 (autoprefixer)
  - webpack.config.js
    - 各種插件
    - loader
    - entry, ouput => 專案出入口
    - mode => production, development 壓縮 js 與 tree shaking

## 常用插件 plugins

- html-webpack-plugin 用來自動產生 html 檔案，並且自動匯入 JS, CSS, 也提供了 webpack serve
  這個指令產生一個網頁伺服器讓我們使用，和 create react app 後的 yarn start 指令的效果很像。

- mini-css-extract-plugin 用來抽離 css，build 後各個在 JS 中 import 的 css 都會獨立產生出一個檔案
  而不是像原本存在於 JS 檔案之中。

- clean-webpack-plugin 在每次 build 之前會先叫 output(dist) 的資料夾清乾淨再產生檔案，不需手動刪除。

- copy-webpack-plugin 將需要的檔案在打包時一起複製到 dist，常見的例子像是 static 資料夾等。

- DefinePlugin 讓 webpack 能夠定義全域變數 (此插件內建在 webpack 中，不需額外安裝)，常用的例如 PRODUCTION 變數。

- compression-webpack-plugin 將檔案壓縮的插件(gzip)

## devtools: "source-map"

讓開發者可以在網頁的開發人員工具中的 source 看到最原本的原始碼，而不是打包過後的樣子。

## tree shaking (production mode)

若在模式設為 development 並且 build 的時候，其他檔案那些沒有被引入的模組或變數都會跟著一起被引入，
為了避免造成資源浪費，將模式設為 production mode 後就能自動避免這種情況。

## Asset modules

今天如果 css 檔案中有圖片或影音等特殊元件，需要再另外安裝 loader 來讓 webpack 看得懂，但是一直重複這個動作很不
符合開發者體驗，因此利用 Asset modules 可以一次性的將特定功能加入。

## post css

上面提到的常用插件都沒有對 css 檔案本身做任何變動，而 PostCss 就是一個能讓這些 css 檔案產生許多附加功能例如
自動產生出支援各瀏覽器的前綴等等，要注意 PostCss 是一個支援 Webpack 的工具，並非插件，在 PostCss 底下的才是插件。
比較常用的插件就是像 Autoprefixer 這樣的 CSS 預處理器。

## browsers list

為了讓 autoprefixer 知道要轉換哪些瀏覽器，我們需要給他一個瀏覽器清單，可以在 package.json 中新增一個 browserslist 或是直接
新增一個 `.browserslistrc` 檔案，實際設置需要打些什麼要去官方文檔確認。注意不需要再額外安裝額外插件，它會自動讀取專案中是否有
符合特定需求的插件例如 autoprefixer。

## Babel

跟 PostCss 一樣都是支援 Webpack 的工具，他能將較新的 JS 語法轉換成各個瀏覽器都能相容的工具。
它的 setup 有很多種，去官方文檔中有各種分類。
