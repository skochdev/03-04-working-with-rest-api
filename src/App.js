import { GlobalStyle } from './GlobalStyle';
import { Box } from 'components/Box';
import { MaterialEditor } from './components/MaterialEditor/MaterialEditor';
import * as API from './services/api';
import { Component } from 'react';
import { MaterialList } from './components/MaterialList/MaterialList';

class App extends Component {
  state = {
    materials: [],
    status: 'idle',
    error: {
      isError: false,
      errorMessage: '',
    },
  };

  async componentDidMount() {
    try {
      this.setState({ status: 'pending' });
      const materials = await API.getMaterials();
      this.setState({ materials, status: 'resolved' });
    } catch (error) {
      this.handleError(error.message);
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
      console.log(material);
    } catch (error) {
      this.handleError(error.message);
    }
  };

  updateMaterial = async update => {
    this.setState({ status: 'pending' });
    try {
      const updatedMaterial = await API.updateMaterial(update);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === update.id ? updatedMaterial : material
        ),
        status: 'resolved',
      }));
    } catch (error) {
      console.log(error);
      this.handleError(error);
    }
  };

  removeMaterial = async maerialId => {
    try {
      await API.deleteMaterial(maerialId);

      this.setState(state => ({
        materials: state.materials.filter(m => m.id !== maerialId),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  handleError = errorMessage => {
    this.setState({ status: 'error', error: { isError: true, errorMessage } });
    console.log(errorMessage);
    return new Error('OOps', errorMessage);
  };

  render() {
    const { removeMaterial, addMaterial, updateMaterial } = this;
    const { materials, status, error } = this.state;

    return (
      <>
        <GlobalStyle />
        <Box as="main" bg="white">
          <MaterialEditor onSubmit={addMaterial} />
          {status === 'pending' && <p>Loading....</p>}
          <MaterialList
            materials={materials}
            onRemoveMaterial={removeMaterial}
            onUpdateMaterial={updateMaterial}
          />

          {status === 'error' && <p>{error.errorMessage}</p>}
        </Box>
      </>
    );
  }
}

export { App };
