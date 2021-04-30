/**
 * TODO: 
 * -Set up to work with API (code is here, but commented)
 * -Add titles for the albums (date of album[1] to date of album[0])
 * 
 * 
 * 
 */



import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
    componentDidMount() {
       /**
        const publicServerUrl = 'http://ec2-18-222-100-185.us-east-2.compute.amazonaws.com';
        const localServerUrl = 'http://localhost';
        // fetch(localServerUrl + ":3000/api/instagram/edsheerantopfivephotourls")
        fetch(publicServerUrl + ":3000/api/instagram/edsheerantopfivephotourls")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.photos
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          **/

          //test photos so I don't have to use the API
         var testArray = [
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/240px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/John_Adams%2C_Gilbert_Stuart%2C_c1800_1815.jpg/240px-John_Adams%2C_Gilbert_Stuart%2C_c1800_1815.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg/240px-Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/James_Madison.jpg/240px-James_Madison.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/James_Monroe_White_House_portrait_1819.jpg/240px-James_Monroe_White_House_portrait_1819.jpg"
          ];
          this.setState({
            isLoaded: true,
            items: testArray
          });

      }

    render() {
        const error = this.state.error;
        const isLoaded = this.state.isLoaded;
        const items = this.state.items;
    
        console.log(items)

        //number of photos in each album
        const albumLength = 2;

        //creates the appropriate amount of empty arrays, each one will represent an album.
        var albumsArray = [];
        for(var i = 0; i < Math.ceil(items.length / albumLength); i++ ){
            albumsArray.push( [] );
        }

        //populates the album arrays;
        var count = 0;
        for(var j = 0; j < items.length; j++ ){
            albumsArray[count].push(items[j]);
            if(albumsArray[count].length === albumLength){
                count++;
            }
        }

        const albumsList = albumsArray.map(album => (
            <div key={album[0]} class="album">
                    {album.map(photo =>(
                        <li class="photo-container" key={photo}>
                            <img class="photo" src={photo} alt="" />
                        </li>
                    ))}
            </div>
        ));

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
          <div>
    
            <ul id="albums-container">{albumsList}</ul>
          </div>
          );
        }
    }
}
export default Dashboard;