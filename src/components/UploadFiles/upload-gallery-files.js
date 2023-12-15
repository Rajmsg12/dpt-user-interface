import React, { Component } from "react";
import UploadService from "../Services/upload-files";
import config from '../../config'

export default class UploadGalleryFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    this.removeFile = this.removeFile.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      /*fileInfos: this.props.filedata? this.props.filedata: [], */
      fileInfos: this.props.filedata ? JSON.parse(this.props.filedata) : [],
    };
  }

  componentDidMount() {
       
  }

  selectFile(event) {
    const selectedFiles = event.target.files;
    const allowedTypes = ['image/jpeg', 'image/png']; // Allowed file types
  
    // Filter selected files to only allow JPG and PNG
    const filteredFiles = [...selectedFiles].filter(file =>
      allowedTypes.includes(file.type)
    );
  
    this.setState({
      selectedFiles: filteredFiles.length > 0 ? filteredFiles : undefined,
    });
  }
  

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        let filedata = localStorage.getItem("filedata");
        let galleryData = filedata ? JSON.parse(filedata) : []
        galleryData.push(response.data.filename);
        localStorage.setItem('filedata', JSON.stringify(galleryData))
      
        
        this.setState({
          message: response.data.message,
          fileInfos: galleryData
        });
         
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }

  removeFile(index) {
    let fileInfos = this.state.fileInfos.slice();
    fileInfos.splice(index, 1);

    localStorage.setItem('filedata', JSON.stringify(fileInfos));

    this.setState({
      fileInfos: fileInfos,
    });
  }

  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
    } = this.state;

    return (
      <div>
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {/* {progress}% */}
            </div>
          </div>
        )}

        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        <button
          className="btn btn-success"
          disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload
        </button>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        <div className="card">
        { /*<div className="card-header">Gallery List</div> */ }
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item position-relative" key={index}>
                  <img src={`${config.baseUrl}/data/uploads/${file}`} width={`100px`} alt={`Gallery ${index}`} />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                    style={{ color: 'black', background: 'none', border: 'none' }}
                    onClick={() => this.removeFile(index)}
                  >
                    ✖
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
