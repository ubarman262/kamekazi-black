<h1 align="center">
  <br>
    <img src="https://firebasestorage.googleapis.com/v0/b/imagepoc-a54c2.appspot.com/o/kamekazi-icon.png?alt=media&token=f3e6ace7-8ab2-4409-9c2e-5492a4a938b4" alt="logo" width="200">
  <br><br>
  Theme
  <br>
  <br>
</h1>

<h4 align="center">Get the Theme into your VS Code.</h4>

<p align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=UjjwalBarman.kamekazi-dark"><img src="https://vsmarketplacebadge.apphb.com/version-short/UjjwalBarman.kamekazi-dark.svg?style=for-the-badge&colorA=252526&colorB=43A047&label=VERSION" alt="Version"></a>&nbsp;
    <a href="ttps://marketplace.visualstudio.com/items?itemName=UjjwalBarman.kamekazi-dark"><img src="https://vsmarketplacebadge.apphb.com/rating/UjjwalBarman.kamekazi-dark.svg?style=for-the-badge&colorA=252526&colorB=43A047&label=Rating" alt="Rating"></a>&nbsp;
    <a href="ttps://marketplace.visualstudio.com/items?itemName=UjjwalBarman.kamekazi-dark"><img src="https://vsmarketplacebadge.apphb.com/installs-short/UjjwalBarman.kamekazi-dark.svg?style=for-the-badge&colorA=252526&colorB=43A047&label=Installs" alt="Installs"></a>&nbsp;
    <a href="ttps://marketplace.visualstudio.com/items?itemName=UjjwalBarman.kamekazi-dark"><img src="https://vsmarketplacebadge.apphb.com/downloads-short/UjjwalBarman.kamekazi-dark.svg?style=for-the-badge&colorA=252526&colorB=43A047&label=Downloads" alt="Downloads"></a>
</p>


## Theme contributions

1. Theme supports File Icons (Change from File Icon Theme in settings)
1. Theme supprots Product Icons (Change from Product Icons in settings)

## Theme Screenshot

![Screenshot - Theme](https://firebasestorage.googleapis.com/v0/b/imagepoc-a54c2.appspot.com/o/kamekazi-ss.png?alt=media&token=c942f3fc-8378-4588-993d-21c4bfa6dde8)
## Installation

1. Open the extensions sidebar on Visual Studio Code
1. Search for Kamekazi
1. Click Install
1. Click Reload to reload your editor
1. Select the Manage Cog (bottom left) > Color Theme ＞ Theme
1. 🌟🌟🌟🌟🌟 Rate five-stars 😃

### Italic

You could set this in your setting.json to make code be italic

```json
    "editor.tokenColorCustomizations": {
      "textMateRules": [
        {
          "scope": [
            // the following elements will be in italic
            "comment",
            "storage.modifier", // static keyword
            "storage.type.php", // typehints in methods keyword
            "keyword.other.new.php", // new
            "entity.other.attribute-name", // html attributes
            "fenced_code.block.language.markdown", // markdown language modifier
            "keyword", //import, export, return…
            "storage.modifier", //static keyword
            "storage.type", //class keyword
            "keyword.control",
            "constant.language",
            "entity.other.attribute-name",
            "entity.name.method",
            "keyword.control.import.ts",
            "keyword.control.import.tsx",
            "keyword.control.import.js",
            "keyword.control.flow.js",
            "keyword.control.from.js",
            "keyword.control.from.ts",
            "keyword.control.from.tsx"
          ],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": [
            // the following elements will be displayed in bold
            "entity.name.type.class" // class names
          ],
          "settings": {
            "fontStyle": ""
          }
        },
        {
          "scope": [
            // the following elements will be displayed in bold and italic
            "entity.name.section.markdown" // markdown headlines
          ],
          "settings": {
            "fontStyle": "italic"
          }
        },
        {
          "scope": [
            // the following elements will be excluded from italics
            //   (VSCode has some defaults for italics)
            "invalid",
            "keyword.operator",
            "constant.numeric.css",
            "keyword.other.unit.px.css",
            "constant.numeric.decimal.js",
            "constant.numeric.json",
            "comment.block",
            "entity.other.attribute-name.class.css"
          ],
          "settings": {
            "fontStyle": ""
          }
        }
      ]
    },
```

### Suggest Editor Settings

```json
"editor.fontSize": 16,
 "editor.lineHeight": 22,
 "editor.fontFamily": "Operator Mono Lig",
```

