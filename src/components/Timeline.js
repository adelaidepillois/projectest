import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const EXAMPLE = [
    {
        data: "2016",
        status: "status",
        statusB: "Bac STL, Lycée St Louis, Bordeaux",
        statusE: "test"
    },
    {
        data: "2018",
        status: "status",
        statusB: "Je suis une personne dynamique et créative qui aime les\n" +
            "                      défis. Le développement informatique ainsi que la\n" +
            "                      recherche de la meilleure solution à mettre en place afin\n" +
            "                      de garantir la meilleure expérience utilisateur est un\n" +
            "                      problème sur lequel j’aime réfléchir. Je souhaite\n" +
            "                      également élargir mes compétences et je n’ai donc pas peur\n" +
            "                      d’en découvrir de nouvelles.",
        statusE: "Open for Fillup"
    },
    {
        data: "2019",
        status: "status",
        statusB: "Start 2nd round",
        statusE: "process"
    },
    {
        data: "2020",
        status: "status",
        statusB: "Start 3rd round",
        statusE: "Done"
    },
    {
        data: "2021",
        status: "status",
        statusB: "Start 4th round",
        statusE: "Done"
    },
    {
        data: "2022",
        status: "status",
        statusB: "Complete",
        statusE: "Done"
    }
];

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curIdx: 0,
            prevIdx: -1
        };
    }

    //state = { value: 0, previous: 0 };

    render() {
        const {curIdx, prevIdx} = this.state;
        const curStatus = EXAMPLE[curIdx].statusB;
        const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].statusB : "";

        return (
            <div class="container">
                <div className="timeline">
                    <div
                        style={{
                            width: "90%",
                            height: "100px",
                            margin: "100px auto",
                            marginTop: "80px",
                            fontFamily: "Centra, sans-serif",
                            fontSize: "15px"
                        }}
                    >
                        <HorizontalTimeline
                            styles={{
                                background: "#0e1129",
                                foreground: "#0e1129",
                                outline: "purple"
                            }}
                            index={this.state.curIdx}
                            indexClick={(index) => {
                                const curIdx = this.state.curIdx;
                                this.setState({curIdx: index, prevIdx: curIdx});
                            }}
                            values={EXAMPLE.map((x) => x.data)}
                        />
                    </div>
                    <div className="text-center timeline-bx">
                        {/* Prevoius:-{prevStatus} - Current Select:-{curStatus} */}
                        {curStatus}
                    </div>
                </div>
            </div>
        );
    }
}
