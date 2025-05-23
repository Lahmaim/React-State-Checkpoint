import React from "react";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Person: {
                fullName: "Anas lahmaim ",
                bio: "Aspiring full-stack developer passionate about building useful web applications.",
                imgSrc: "https://via.placeholder.com/150https://fakeimg.pl/600x400/594343/909090?text=Your+time+for+change",
                profession: "Web Developer",
            },
            shows: false,
            mountedTime: 0,
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        this.setState((prevState) => ({
            shows: !prevState.shows,
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                mountedTime: prevState.mountedTime + 1,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { Person, shows, mountedTime } = this.state;

        return (
            <div
                className="App"
                style={{ padding: "20px", fontFamily: "Arial" }}
            >
                <button onClick={this.toggleShow}>
                    {shows ? "Hide Profile" : "Show Profile"}
                </button>

                {shows && (
                    <div style={{ marginTop: "20px" }}>
                        <img src={Person.imgSrc} alt="Profile" />
                        <h2>{Person.fullName}</h2>
                        <p>
                            <strong>Bio:</strong> {Person.bio}
                        </p>
                        <p>
                            <strong>Profession:</strong> {Person.profession}
                        </p>
                    </div>
                )}

                <p>⏱ Time since component mounted: {mountedTime} seconds</p>
            </div>
        );
    }
}

export default App;
