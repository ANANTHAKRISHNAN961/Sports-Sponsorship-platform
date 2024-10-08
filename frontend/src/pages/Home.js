import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
    return (
        <div style={{ margin: 0, padding: 0 }}>
            <header className="bg-primary text-white text-center py-5">
                <div className="container-fluid">
                    <h1 className="display-4">Welcome to the Sports Sponsorship Platform</h1>
                    <p className="lead">Showcase your talent and connect with sponsors!</p>
                    <a href="/register" className="btn btn-light btn-lg">Get Started</a>
                </div>
            </header>

            <section className="py-5">
                <div className="container-fluid">
                    <h2 className="text-center mb-4">Why Join Us?</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">🤝 Connect with Sponsors</h5>
                                    <p className="card-text">Find sponsors who believe in your talent and help you reach your goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">🏆 Showcase Your Achievements</h5>
                                    <p className="card-text">Display your achievements and progress to attract more opportunities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">🌐 Join a Community</h5>
                                    <p className="card-text">Connect with other athletes and share experiences, tips, and support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light text-center py-5">
                <div className="container-fluid">
                    <h2 className="mb-4">Latest News and Updates</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <h5>🔔 New Sponsorship Opportunities</h5>
                            <p>Explore the latest sponsorship opportunities available to athletes.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>📅 Upcoming Events</h5>
                            <p>Stay updated with upcoming sports events and competitions.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>🏅 Success Stories</h5>
                            <p>Read inspiring success stories from athletes who made it big!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
