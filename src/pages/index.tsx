const jobsLoading = false;
const jobsList: any[] = [];
const JobCard = (job: any) => (<p>{job}</p>);


export default function Home() {
  return (
    <div className="pattern-bg">
      <div className="content">
        <section className="presentation">
          <div className="presentation-content">
            <h1 className="presentation-title">
              <img src="~/assets/svg/logo.svg" alt="KDTI" />
            </h1>
            <p className="prescription-description">
              lkl;klk;lkl
            </p>
            <figure className="illustration">
              <img
                src="~/assets/svg/woman-working.svg"
                alt="Ilustração de uma mulher tabalhando no computador"
              />
            </figure>
            <div className="presentation-action">
              <a href="/login" className="button button-outline">{ 'home.registerJobs' }</a>
            </div>
          </div>
        </section>

        <section className="recent-jobs">
          <h2 className="section-title">
            { 'home.lastJobs' }
          </h2>
          {/* //TODO: <Spinner v-if="jobsLoading" className="spinner" /> */}
          { 
            jobsLoading
            ? (<p>Spinner component</p>)
            : (
              <ul className="job-list">
                {jobsList.map(job => (
                  <li>
                    <JobCard job={job} />
                  </li>
                ))}
              </ul>
            )
          }
          
          <ul v-else className="job-list">
            <li v-for="job in jobsList" :key="job.id" className="job-card-item">
              <JobCard :data="job" />
            </li>
          </ul>
          <router-link to="/jobs" className="button button-see-more">
            { 'home.lastJobs' }
          </router-link>
        </section>

        <section className="events">
          <h2 className="section-title">
            { 'home.events' }
          </h2>
          <div className="events-content">
            <div className="events-info">
              { 'home.eventsInfo' }
            </div>
            <div className="events-timeline">
              <ul className="events-list">
                <li v-for="event in events" :key="event.id" className="events-item">
                  <div className="event-date">
                    <span className="day">{{ event.day }}</span>
                    <span className="month">{{ event.month }}</span>
                  </div>
                  <h5 className="title">{{ event.title }}</h5>
                  <p>{{ event.description }}</p>
                  <a :href="event.link" target="_blank">
                    { 'home.moreInfo' }
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="home-footer">
          <figure className="illustration">
            <img
              src="~/assets/svg/group-working.svg"
              alt="Ilustração de um grupo tabalhando"
            />
          </figure>
        </footer>
      </div>
    </div>
  )
}
