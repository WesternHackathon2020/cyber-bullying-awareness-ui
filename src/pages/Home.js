import React from 'react';
import Dashboard from '../components/Dashboard';
import DashPage from './DashPage';
import api from "../api";
import TelusContactContainer from "../components/TelusBottomBar/TelusContactContainer";

// const Home = () => (
//     <DashPage>
//         <Dashboard />
//     </DashPage>
// );

// export default Home;
const teacherId = "5fb9a0fd91ba51fb2a62a707";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {flaggedMap: {}};
    }

    componentDidMount() {
        this.init();
        console.log("did Mounting:");
    }

    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     this.init();
    //     console.log("update:");
    //   }

    async init() {

        console.log("INIT");
        try {
            console.log("TRYING TO CALL APIs");
            // let teacher = await api.Teacher.getTeachersById(teacherId);
          
            const flaggedMap = {};
            flaggedMap["Math"] = (await api.Course.getFlaggedContentByCourseId("5fb9a1651a45aefb5aa53d7d")).data;
            flaggedMap["English"] = (await api.Course.getFlaggedContentByCourseId("5fb9a1651a45aefb5aa53d7e")).data;
            flaggedMap["Science"] = (await api.Course.getFlaggedContentByCourseId("5fb9a1651a45aefb5aa53d7f")).data;
            this.setState({flaggedMap});
            console.log('flaggedMap:', flaggedMap);

            // setIsLoading(false);
        }
        catch (error) {
            console.log(error);
            // setIsLoading(false);
        }

    }

    render() {
        return (
            <DashPage>
                <Dashboard flaggedMap={this.state.flaggedMap} courseList={["Math", "English", "Science"]}/>
                <TelusContactContainer/>
            </DashPage>
        );
    }
}