
import { commonApi } from "./commonAPI";
import { server_url } from "./serverURL";

//1st request - upload a video
export const uploadVideo = async (req_body) => {
    //make post http request 'http://localhost:4000/videos' to add video in json server return response to add component
    return await commonApi('post', `${server_url}/videos`, req_body);
}

//get all videos from json server
export const getAllVideos = async () => {
    //make post http request 'http://localhost:4000/videos' to add video in json server return response to view component
    return await commonApi('get', `${server_url}/videos`, '');
}

//get a particular video from json server
export const getAVideo = async (id) => {
    //make post http request 'http://localhost:4000/videos/id' to add video in json server return response to videoCard component
    return await commonApi('get', `${server_url}/videos/${id}`, '');
}

//remove or delete particular video from json server
export const deleteAVideo = async (id) => {
    //make post http request 'http://localhost:4000/videos/id' to add video in json server return response to view component
    return await commonApi('delete', `${server_url}/videos/${id}`, {});
}

//store watch history to json server

export const addToWatchHistory = async (req_body) => {
    //make post http request 'http://localhost:4000/watch_history' to add video in json server return response to videoCard component
    return await commonApi('post', `${server_url}/watch_history`, req_body);
};

export const getWatchHistory = async () => {
    //make post http request 'http://localhost:4000/watch_history' to get video in json server return response to watch history component
    return await commonApi('get', `${server_url}/watch_history`, '');
};

export const addCategories = async (req_body) => {
    //make post http request 'http://localhost:4000/watch_history' to add video in json server return response to category component
    return await commonApi('post', `${server_url}/category`, req_body);
};

export const getCategories = async () => {
    //make post http request 'http://localhost:4000/watch_history' to get video in json server return response to category component
    return await commonApi('get', `${server_url}/category`, '');
};

//to delete categori item
export const deleteCategory = async (id) => {
    //make post http request 'http://localhost:4000/watch_history' to get video in json server return response to category component
    return await commonApi('delete', `${server_url}/category/${id}`, {});
};


//to update categori allVideos
export const updateCategory = async (id, req_body) => {
    //make post http request 'http://localhost:4000/watch_history' to get video in json server return response to category component
    return await commonApi('put', `${server_url}/category/${id}`, req_body);
};

