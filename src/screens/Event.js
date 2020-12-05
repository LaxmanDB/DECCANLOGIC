import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faComments } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Event = () => {
  const [Event, setEvent] = useState("");
  const [Title, setTitle] = useState("");
  const [Categories, setCategories] = useState("");
  const [Summary, setSummary] = useState("");
  const [Type, setType] = useState("");
  const [Time, setTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [Date, setDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [Zone, setZone] = useState("");
  const [Site, setSite] = useState("");
  const [File, setFile] = useState("");
  //const [Preview, setPreview] = useState();

  // setPreview(URL.createObjectURL(File));

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch({
      type: "EVENT_REGISTER_REQUEST",
      payload: {
        Event,
        Title,
        Categories,
        Summary,
        Type,
        Time,
        EndTime,
        Date,
        EndDate,
        Zone,
        Site,
        File,
      },
    });
    alert("Form is submitted successfully");
  };

  return (
    <div classNameName="App">
      <nav>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <input type="text" className="searchbar" placeholder="Search.." />

        <div className="icons">
          <FontAwesomeIcon className="icon1" icon={faUser} />
          <FontAwesomeIcon className="icon2" icon={faBell} />
          <FontAwesomeIcon className="icon3" icon={faComments} />
        </div>
      </nav>

      <div className="create-event">
        <h2>Create evevnt</h2>
        <div className="buttons">
          <button type="button" className="b1" onClick={submitHandler()}>
            Create
          </button>
          <button type="button" className="b2">
            Cancel
          </button>
        </div>
      </div>

      <div className="form">
        <p>Add event in *</p>
        <select
          name="add-event-in"
          id="add-event-in"
          onChange={(e) => setEvent(e.target.value)}
        >
          <option value="volvo">Select</option>
          <option value="Pune, Maharashtra">Pune, Maharashtra</option>
          <option value="Pune, Maharashtra">chennai, Maharashtra</option>
          <option value="Pune, Maharashtra">Pune, Maharashtra</option>
        </select>
        <div>
          <input type="file" id="myFile" name="upload image" />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder=" "
            id="title"
            autocomplete="off"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label for="title" className="label-title">
            <span className="content-name">Title *</span>
          </label>
        </div>

        <p className="catagories">catagories *</p>
        <select
          required
          name="catagories"
          id="catagories"
          onChange={(e) => setCategories(e.target.value)}
        >
          <option value="volvo">Select</option>
          <option value="saab">Pune, Maharashtra</option>
          <option value="opel">mumbsi, Maharashtra</option>
          <option value="audi">banglore, Maharashtra</option>
        </select>
        <div className="form-group">
          <input
            type="textarea"
            name="Short-summury"
            placeholder=" "
            id="Short-summury"
            autocomplete="off"
            required
            onChange={(e) => setSummary(e.target.value)}
          />
          <label for="Short-summury" className="label-Short-summury">
            <span className="content-name">Short summury *</span>
          </label>
        </div>

        <div className="form-group">
          <input
            type="url"
            name="Registration-site"
            placeholder=" "
            id="Registration-site"
            autocomplete="off"
            required
            onChange={(e) => setType(e.target.value)}
          />
          <label for="Registration-site" className="label-Registration-site">
            <span className="content-name">Registration site</span>
          </label>
        </div>

        <div className="form-group">
          <input
            type="url"
            name="Online-link"
            placeholder=" "
            id="Online-link"
            autocomplete="off"
            required
            onChange={(e) => setSite(e.target.value)}
          />
          <label for="Online-link" className="label-Online-link">
            <span className="content-name">Online link</span>
          </label>
        </div>

        <p className="catagories">Select timezone *</p>
        <select
          name="Select-timezone"
          id="Select-timezone"
          onChange={(e) => setZone(e.target.value)}
        >
          <option value="volvo">Pune</option>
          <option value="saab">Pune, Maharashtra</option>
          <option value="opel">Mumbai, Maharashtra</option>
          <option value="audi">Nashik, Maharashtra</option>
        </select>

        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="blue-column">
                <div className="form-group">
                  <input
                    type="date"
                    name="Start-date"
                    placeholder=" "
                    id="Start-date"
                    autocomplete="off"
                    required
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <label for="Start-date" className="label-Start-date">
                    <span className="content-name">Start date *</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <div className="form-group">
                  <input
                    type="time"
                    name="Start-time"
                    placeholder=" "
                    id="Start-time"
                    autocomplete="off"
                    required
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <label for="Start-time" className="label-Start-time">
                    <span className="content-name">Start time *</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="blue-column">
                <div className="form-group">
                  <input
                    type="date"
                    name="End-date"
                    placeholder=" "
                    id="Start-date"
                    autocomplete="off"
                    required
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <label for="Start-date" className="label-Start-date">
                    <span className="content-name">End date *</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <div className="form-group">
                  <input
                    type="time"
                    name="End-time"
                    placeholder=" "
                    id="Start-time"
                    autocomplete="off"
                    required
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                  <label for="Start-time" className="label-Start-time">
                    <span className="content-name">End time *</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <textarea
            rows="10"
            cols="95"
            placeholder="sadnbsvdvsdng"
            name="comment"
            form="usrform"
          >
            Description "max limit 8000 characters"
          </textarea>
        </div>
        <div height="100" width="100" onChange={(e) => setFile(e.target.value)}>
          <input type="file" id="myFile" name="filename" />
          <img
            src={File}
            alt=" Click here to upload File(s)"
            width="600"
            height="600"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Event;
