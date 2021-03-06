/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>

            <h5>Docs</h5>
            <a href={this.docUrl('intro.html', this.props.language)}>
              Getting Started
            </a>

            <a href={this.docUrl('groceristar-project.html', this.props.language)}>
              GroceriStar section
            </a>

            <a href={this.docUrl('chickenkyiv-project.html', this.props.language)}>
              ChickenKyiv section
            </a>

            <a href={this.docUrl('mealcalendar-project.html', this.props.language)}>
              Meal Calendar section
            </a>

            <a href={this.docUrl('searchapi-project.html', this.props.language)}>
              Search API section
            </a>

            <a href={this.docUrl('searchform-project.html', this.props.language)}>
              Search Form section
            </a>

          </div>
          <div>

          </div>
          <div>
            <h5>More</h5>
          <a href="https://medium.com/groceristar">Blog</a>
            <a href="https://github.com/GroceriStar/groceristar-fetch">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="GroceriStar/groceristar-fetch/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        {/* <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/oss_logo.png'}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a> */}
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
