import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the nm-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'nm-theme:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension nm-theme is activated!');
  }
};

export default plugin;
