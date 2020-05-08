import React from 'react';

function lazyComponent(importComponent) {
  return class extends React.Component {
    state = {
      component: null,
    };

    componentDidMount() {
      importComponent().then((importedComponent) => {
        this.setState({
          component: importedComponent.default,
        });
      });
    }

    render() {
      const RenderComponent = this.state.component;
      return RenderComponent ? <RenderComponent {...this.props} /> : null;
    }
  };
}

export default lazyComponent;
