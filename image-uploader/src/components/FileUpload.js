import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import './FileUpload.css'

export class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      profileImg: ''
    }
  }

  onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] })
  }

  onSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('profileImg', this.state.profileImg)
    axios.post("http://localhost:4000/api/user-profile", formData, {
    }).then(res => {
      console.log(res)
    })
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="file" className='input-file btn btn-dark' onChange={this.onFileChange} />
            </div>
            <div className="form-group">
              <button className="btn-submit btn btn-warning m-3" type="submit">Upload</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
