import { clientBasicInformation, projectBasicInformation } from '../../config';

export class PageHead {
  public async init() {
    this.setHeadContent();
  }

  private setHeadContent() {
    document.getElementsByTagName('head')[0].innerHTML += `
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
          <link href="../../../assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
          <link href="../../../assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
          <title>Sign In | ${projectBasicInformation.title}</title>
          <meta name="description" content="${projectBasicInformation.description}" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="system" />
          <meta property="og:title" content="${clientBasicInformation.client}" />
          <meta property="og:url" content="${clientBasicInformation.clientURL}" />
          <meta property="og:site_name" content="${clientBasicInformation.client}" />
	        <link rel="shortcut icon" href="../../../assets/media/logos/favicon.ico" />
        `;
  }
}
new PageHead();
