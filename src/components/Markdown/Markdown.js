import React from 'react';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import { Link20 } from '@carbon/icons-react';

export class h1 extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7">
          <h1 className="page-h1">{this.props.children}</h1>
        </div>
      </div>
    );
  }
}

export class h2 extends React.Component {
  render() {
    return (
      <Location>
        {({ location }) => {
          const hash = typeof this.props.children[0] !== 'string' ? undefined : this.props.children[0].replace(/[:&]/g, '').toLowerCase().split(' ').join('-');
          const path = location.pathname;
          return (
            <div className="ibm--row">
              <div className="ibm--col-lg-7">
                <h2 className="page-h2" id={hash}>     
                  {hash && (<Link className="anchor-link" to={`${path}#${hash}`}>
                    <Link20 className="anchor-link__icon" aria-label="Anchor Link" />
                  </Link>)}
                  {this.props.children}
                </h2>
              </div>
            </div>
          )
        }}
      </Location>
    );
  }
}

export class h3 extends React.Component {
  render() {
    return (
      <Location>
        {({ location }) => {
          const hash = typeof this.props.children[0] !== 'string' ? undefined : this.props.children[0].replace(/[:&]/g, '').toLowerCase().split(' ').join('-');
          const path = location.pathname;
          return (
            <div className="ibm--row">
              <div className="ibm--col-lg-7">
                <h3 className="page-h3" id={hash}>     
                  {hash && (<Link className="anchor-link" to={`${path}#${hash}`}>
                    <Link20 className="anchor-link__icon" aria-label="Anchor Link" />
                  </Link>)}
                  {this.props.children}
                </h3>
              </div>
            </div>
          )
        }}
      </Location>
    );
  }
}

export class h4 extends React.Component {
  render() {
    return (
      <Location>
        {({ location }) => {
          const hash = typeof this.props.children[0] !== 'string' ? undefined : this.props.children[0].replace(/[:&]/g, '').toLowerCase().split(' ').join('-');
          const path = location.pathname;
          return (
            <div className="ibm--row">
              <div className="ibm--col-lg-7">
                <h4 className="page-h4" id={hash}>     
                  {hash && (<Link className="anchor-link" to={`${path}#${hash}`}>
                    <Link20 className="anchor-link__icon" aria-label="Anchor Link" />
                  </Link>)}
                  {this.props.children}
                </h4>
              </div>
            </div>
          )
        }}
      </Location>
    );
  }
}

export class h5 extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7">
          <h5 className="page-h5">{this.props.children}</h5>
        </div>
      </div>
    );
  }
}

export class ul extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-8">
          <ul className="page-ul">{this.props.children}</ul>
        </div>
      </div>
    );
  }
}

export class ol extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-8">
          <ol className="page-ol">{this.props.children}</ol>
        </div>
      </div>
    );
  }
}

export class p extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-8 ibm--col-md-6">
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export class AnchorLinks extends React.Component {
  render() {
    return (
      <div className="anchor-links">
        {this.props.children}
      </div>
    );
  }
}

export class Dark extends React.Component {
  render() {
    return (
      <div className="ibm--grid dark">
        {this.props.children}
      </div>
    );
  }
}

export class Light extends React.Component {
  render() {
    return (
      <div className="ibm--grid light">
        {this.props.children}
      </div>
    );
  }
}
