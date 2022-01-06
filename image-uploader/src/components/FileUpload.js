import { Component } from 'react/cjs/react.production.min';

export class FileUpload extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <form>
              <h3>React File Upload</h3>
              <div className='form-group'>
                <input className='file'/>
              </div>
              <div className='form-group'>
                <button className='btn btn-primary' type='submit'>Upload</button>
              </div>
          </form>
        </div>
      </div>
    )
  } 
}
