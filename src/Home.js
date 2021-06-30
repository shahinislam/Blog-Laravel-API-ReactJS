import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
        
    return ( 
        <div className="home">
            {error && <p>{ error }</p>}
            {isLoading && <h2>Loading...</h2>}
            {blogs && <BlogList blogs={blogs} title="All Blog List" />}
        </div>
    );
}
 
export default Home;