import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  testImage = require('!file-loader!./images/test-image.png').default;
  testIcon = require('!html-loader!image-webpack-loader!./images/test-icon.svg');

  ngOnInit(): void {
    /* const imagesContext = require.context(
      '!html-loader!image-webpack-loader?{ svgo: { plugins: [ { removeViewBox : false }, { cleanupIDs: { minify: false } }, { convertPathData: false } ] } }!./images/',
      true,
      /^\.\/.*\.svg$/,
    );

    imagesContext.keys().forEach((key) => console.log('> image', key, imagesContext(key))); */
  }
}
