$(document).ready(function() {

/*///////////// MUSIC ACTIVITY ///////////////////*/

	/* Base query url https://funwithajax.herokuapp.com/api/ */

		/* Base query url https://funwithajax.herokuapp.com/api/ */

      /*
      1.
				Create a function call `getMusic`
           The function is already invoked at the end of this file.
           close this function just before it is invoked
			*/
			function getMusic(){
      /*
      2.
				a.  create a varialbe named `cors` that has the value `https://cors-anywhere.herokuapp.com/`

				b.  create a variable named `baseURL` with the value `https://funwithajax.herokuapp.com/api`


				c.  create a variable with the name `query` with the value `"?q=music&t=song%of%your%choice"`

				d. create a variable with the name `apiKey` with the value `&apikey=i7_iHnA2g-3d`

					parameter `q` with the value `music`.
					parameter `t` with the value `song of your choice` (replace all spaces with %)
					paramater `apikey` with value `i7_iHnA2g-3d`

					Example: to pass the parameter `q` with a value of `chicken` we can use `?q=chicken`
					use `?`` to denote query parameter are being used
					`q` for query
					followed by the parameter
					`&`` new query
					`t` for query
					followed by the parameter
					`&` new query
					`apikey` for query
					followed by the parameter
			*/
			var cors = "https://cors-anywhere.herokuapp.com/";
			var baseURL = "https://funwithajax.herokuapp.com/api";
			// var query = "?q=music&t=gods%plan";
			var query = "?q=music&t=Celebrate";
			var apiKey = "&apikey=i7_iHnA2g-3d";
      /*
      3.
				Using ajax make a `GET` request to:
          `cors` plus `baseURL` plus `query` plus `apiKey`
        Close your promise (.then()) just before you close the function. We will be writing the rest of our code within the promise, ensuring that all this logic happens only once we've received a return from the API.
			*/
			$.ajax({
				url: cors + baseURL + query + apiKey,
				method: "GET"
			}).then(function(response){
				console.log("Response: ", response);
      /*
      4.
				`console.log` the response
					** make sure to add a string note inside ALL your console.log like:
						console.log("these are the results:", result);
			*/

			/*
				examine the response, look at the data structure
			*/

      /*
      5.
				remove class `heroes` and `weather` from `#container`
			*/
			$("#container").removeClass("heroes");
			/*
				add class `music-BKG` to `body`
			*/
			$("body").addClass("music-BKG");
			/*
				remove class `blue` to the `#wrap`
			*/
			$("#wrap").removeClass("blue");
			/*
				remove class `weather-wrap` and `heroes` from `#content`
			*/
			$("#content").removeClass("weather-wrap");
			/*
				add class `music` to `#content`
			*/
			$("#content").addClass("music");
			/*
				Before doing anything with the data make sure that you remove any elements inside the `#contents` container
					remember `.empty()`
			*/
		/*
			Using jQuery
		*/
			$("#contents").empty();
      /*
      6.
				get the `first item` from the `response`
				store it to a variable with the name `track`
			*/
			var track = response.tracks.items[0];
			/*
				create a `div` store it in a variable named `trackWrap`
				add a class of `track-wrap` to `trackWrap div`
			*/
			var trackWrap = $('<div>').addClass("track-wrap");
			/*
				create a `div` store it in a variable named `trackCol1`
				add classes  `"col-xs-12 col-sm-12 col-md-6 col-lg-6 t-col-1"` to the `trackCol1 div`
			*/
			var trackCol1 = $("<div>").addClass("col-xs-12 col-sm-12 col-md-6 col-lg-6 t-col-1");

			var trackCol2 = $("<div>").addClass("col-xs-12 col-sm-12 col-md-6 col-lg-6 t-col-1");
			/*
				create a `h2` store it to a variable named `heading`
				add text the `heading` with the value of the `track` name
			*/
			var heading = $("<h2>").text(track.name);
			/*
				create a variable named `artistURL` with the value of  the `track` firts artists spotify external url
			*/
			var artistURL = track.artists[0].external_urls.spotify;
			/*
				create an image and store it to a variable named `img`
				add a class of `track-img` to `img div`
				get the album image url with the height: 300
			  assign it to the `img` source attribute
			*/
			var img = $("<img>").addClass("track-img").attr("src", track.album.images[1].url);
			// get the first artist name
			// external spotify URL for artist
			var artist = $("<h4>").text(track.artists[0].name);
			// get album name
			var album = $("<p>").text(track.album.name);
			// get release date
			var releaseDate = $("<p>").text(track.album.release_date);
			// get external spotify URL for album
			var albumURL = track.album.external_urls.spotify;
			// button to listen in new tab
			var trackLink = track.external_urls.spotify;
			var listenBtnLink = $("<a target='_blank'>").attr("href", artistURL);
			var listenBtn = $("<button>").addClass("track-btn").text("Liseten Now");
			listenBtnLink.html(listenBtn);
			// eternal spotify URL for song
			// var trackLink = track.external_urls.spotify;

			trackCol1.append(heading, img);

			trackCol2.append(artist, album, releaseDate, listenBtnLink);

			trackWrap.append(trackCol1, trackCol2);

			$("#content").append(trackWrap);
			})
		}
getMusic()

})
