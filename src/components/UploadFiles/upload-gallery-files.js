import React, { Component } from "react";
import UploadService from "../Services/upload-files";
import config from '../../config';

export default class UploadGalleryFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: undefined,
      progress: 0,
      message: "",
      fileInfos: [],
    };

    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    this.removeFile = this.removeFile.bind(this);
  }

  componentDidMount() {
    const { uploadType } = this.props;
    const storageKey = `filedata_${uploadType}`;
    let filedata = localStorage.getItem(storageKey);
    this.setState({
      fileInfos: filedata ? JSON.parse(filedata) : [],
    });
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

  upload(event) {
    event.preventDefault();
    const { uploadType, onFileUpload } = this.props;
    const { selectedFiles } = this.state;

    const uploadPromises = [];
    selectedFiles.forEach(file => {
      const uploadPromise = new Promise((resolve, reject) => {
        UploadService.upload(file, (event) => {
          // You can add progress updates here if needed
          this.setState({
            progress: Math.round((100 * event.loaded) / event.total),
          });
        })
          .then((response) => {
            resolve(response.data.filename);
          })
          .catch((error) => {
            reject(error);
          });
      });
      uploadPromises.push(uploadPromise);
    });

    Promise.all(uploadPromises)
      .then((fileNames) => {
        const storageKey = `filedata_${uploadType}`;
        let filedata = localStorage.getItem(storageKey);
        let galleryData = filedata ? JSON.parse(filedata) : [];
        galleryData.push(...fileNames);
        localStorage.setItem(storageKey, JSON.stringify(galleryData));


        this.setState({
          message: "Files uploaded successfully",
          fileInfos: galleryData,
          selectedFiles: undefined, // Clear selected files after upload
          progress: 0, // Reset progress after upload
        });

        // Update the form data with the uploaded file names
        if (onFileUpload && typeof onFileUpload === 'function') {
          onFileUpload(fileNames, uploadType);
        }
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the files!",
          selectedFiles: undefined,
        });
      });
      
  }

  removeFile(event, index) {
    event.stopPropagation();
    let fileInfos = this.state.fileInfos.slice();
    fileInfos.splice(index, 1);
    const { uploadType } = this.props;
    const storageKey = `filedata_${uploadType}`;
    localStorage.setItem(storageKey, JSON.stringify(fileInfos));

    this.setState({
      fileInfos: fileInfos,
    });
  }

  render() {
    const {
      selectedFiles,
      progress,
      message,
      fileInfos,
    } = this.state;

    return (
      <div>
        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        <button
          className="btn btn-success"
          disabled={!selectedFiles}
          onClick={(event) => this.upload(event)}
        >
          Upload
        </button>


        <div className="alert alert-light" role="alert">
          {message}
        </div>

        <div className="card">
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item position-relative" key={index}>
                  <img src={`${config.baseUrl}/data/uploads/${file}`} width={`100px`} alt={`Gallery ${index}`} />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                    style={{ color: 'black', background: 'none', border: 'none' }}
                    onClick={(event) => this.removeFile(event, index)}
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