import React from 'react'
import Project from './Project'
import DashboardMenu from './DashboardMenu'
import ProjConfirm from './ProjConfirm'
import FundraiserForm from './FundraiserForm'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'
// import ProjectCard from './ProjectCard'


const Dashboard = ({ projects }) => {

    return (
        <div>
            <DashboardMenu />
            <Project />
            <FundraiserForm />
            {(projects.map((project, index) => {
                return <ProjConfirm project={project} key={index} />;
                    })
                )}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {

        projects: state.projects,
    };
};

export default connect(mapStateToProps, { fetchProjects })(Dashboard)
