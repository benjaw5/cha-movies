package Entity;

import com.google.gson.JsonObject;

public class Movie {
    private String id;
    private String title;
    private String director;
    private String year;
    private String rating;
    private String stars;
    private String genres;

    public Movie(String id, String title, String director, String year, String rating, String stars, String genres) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.rating = rating;
        this.stars = stars;
        this.genres = genres;
    }

    public JsonObject movieToJson() {
        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("movie_id", this.id);
        jsonObject.addProperty("movie_title", this.title);
        jsonObject.addProperty("movie_year", this.year);
        jsonObject.addProperty("movie_director", this.director);
        jsonObject.addProperty("movie_rating", this.rating);
        jsonObject.addProperty("movie_stars", this.stars);
        jsonObject.addProperty("movie_genres", this.genres);
        return jsonObject;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public void setStars(String stars) {
        this.stars = stars;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDirector() {
        return director;
    }

    public String getYear() {
        return year;
    }

    public String getRating() {
        return rating;
    }

    public String getStars() {
        return stars;
    }

    public String getGenres() {
        return genres;
    }

}
