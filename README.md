# To start

1. Download or pull master branch
2. `npm install`

## Gulp Tasks

**Builds files into '/dist'**
    
    gulp

**Build and watch '/src', also set up browserify instance with docs page**

    gulp watch

## Usage

**Dart-Sass is REQUIRED**.
LibSass is the default for node-sass. Make sure to update.

Copy 'src/scss/cds' folder into where you store rest of your scss files, then import _cds.scss

    @import  '[PATH_TO_CDS]/_cds.scss';


