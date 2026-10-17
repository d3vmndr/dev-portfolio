# Mr. Dev — Personal Portfolio

A responsive, dark-first personal portfolio built with plain HTML, CSS, and JavaScript. It is designed for GitHub Pages and supports a custom domain.

## Before publishing

1. Open `index.html`.
2. Replace `YOUR_EMAIL@example.com` with your preferred public contact email.
3. Replace `YOUR_GITHUB_USERNAME` and `YOUR_LINKEDIN_USERNAME` with your actual profile usernames. Remove any social link you do not want to publish.
4. Review the project descriptions and skill list. Keep only statements that accurately describe your work.
5. Add your custom domain in the repository's `CNAME` file (instructions below).

## Publish on GitHub Pages

1. Create a **public** GitHub repository. For a project repository, a name such as `dev-portfolio` works.
2. Upload all files and folders in this package to the repository's root, keeping the `assets` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Wait for GitHub Pages to finish deploying. Your default address will look like `https://YOUR_USERNAME.github.io/dev-portfolio/`.

## Connect a custom domain

You must own or control the domain and have access to its DNS settings.

1. In the repository, create a root-level file named `CNAME` containing only your domain, for example `portfolio.example.com`. Do not include `https://`, a path, or a trailing slash.
2. In **Settings → Pages → Custom domain**, enter the same domain and save.
3. At your DNS provider, create a `CNAME` record for the chosen subdomain. Example: host `portfolio`, value `YOUR_USERNAME.github.io`. If using the apex/root domain (such as `example.com`), configure the four GitHub Pages A records documented in GitHub's official custom-domain guide.
4. After DNS verification and HTTPS provisioning, enable **Enforce HTTPS** in Pages settings.
5. DNS and certificate setup may take time. Do not delete existing DNS records until you understand what services use them.

Official guide: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

## Notes

- No build step, framework, API key, or server is required.
- The theme toggle saves the preference in the visitor's browser.
- The contact button uses the visitor's email application. It is not a backend contact form.
- The Google Fonts import requires internet access; system fonts are used as fallbacks.
