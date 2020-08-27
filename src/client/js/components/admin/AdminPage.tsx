import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Header from './Header';
import Sidebar from './SideBar';
import Travel from './Travel';
import Destinations from './Destinations';
import Posts from './Posts';
import Post from './Post';
import Images from './Images';

const client = new ApolloClient({
	uri: "/graphql",
	cache: new InMemoryCache()
});

const Page = function() {
	const [showNav, setShowNav] = useState(false);

	const navToggler = () => {
		setShowNav(!showNav);
	};

	const navHide = () => {
		setShowNav(false);
	};

	return (
		<React.Fragment>
			<Router>
				<ApolloProvider client={client}>
					<Header navToggler={navToggler}/>
					<div className="container-fluid">
						<div className="row">
							<Sidebar showNav={showNav} navHide={navHide}/>
							<main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
								<Switch>
									<Route path="/admin/travel" component={Travel}/>
									<Route path="/admin/destinations" component={Destinations}/>
									<Route path="/admin/posts" exact component={Posts}/>
									<Route path="/admin/posts/create" render={() => <Post title="Post - Create"/>}/>
									<Route path="/admin" component={Images}/>
								</Switch>
							</main>
						</div>
					</div>
				</ApolloProvider>
			</Router>
		</React.Fragment>
	);
}

export default Page;
