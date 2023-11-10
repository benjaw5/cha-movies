import Entities.Movie;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.crypto.Data;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class DomParser {
    List<Movie> movies = new ArrayList<>();
    Database database;
    Document dom;

    public DomParser() throws Exception {
        database = new Database();
    }
    public void run() throws Exception {
        parseXmlFile("stanford-movies/mains243.xml");
        parseMoviesDocument();
        System.out.println(movies.size());
        database.batchInsertMovies(movies);
        parseXmlFile("stanford-movies/casts124.xml");
        //parseStarsDocument();
        //printData();
    }

    private void parseXmlFile(String path) {
        DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();

        try {
            DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
            dom = documentBuilder.parse(path);
        } catch (ParserConfigurationException | SAXException | IOException error) {
            error.printStackTrace();
        }
    }

    private void parseStarsDocument() {
        Element documentElement = dom.getDocumentElement();

        NodeList directorList = documentElement.getElementsByTagName("dirfilms");

        for (int i = 0; i < directorList.getLength(); i++) {
            Element actorsElement = (Element) directorList.item(i);

            String directorName = getTextValue(actorsElement, "dirname");

            NodeList filmsList = directorFilmsElement.getElementsByTagName("film");


            for (int j = 0; j < filmsList.getLength(); j++) {
                Element filmElement = (Element) filmsList.item(j);
                Movie newMovie = parseMovie(filmElement, directorName);
                movies.add(newMovie);

            }
        }
    }

    private void parseMoviesDocument() throws Exception{

        Element documentElement = dom.getDocumentElement();

        NodeList directorList = documentElement.getElementsByTagName("directorfilms");
        for (int i = 0; i < directorList.getLength(); i++) {
            Element directorFilmsElement = (Element) directorList.item(i);

            String directorName = getTextValue(directorFilmsElement, "dirname");

            NodeList filmsList = directorFilmsElement.getElementsByTagName("film");


            for (int j = 0; j < filmsList.getLength(); j++) {
                Element filmElement = (Element) filmsList.item(j);
                Movie newMovie = parseMovie(filmElement, directorName);
                movies.add(newMovie);
            }
        }
    }

    private Movie parseMovie(Element element, String directorName) {
        String id = getTextValue(element, "fid");
        String title = getTextValue(element, "t");
        String year = getTextValue(element, "year");
        String genre = getTextValue(element, "cats");
        return new Movie(id, title, year, directorName, genre);
    }

    private String getTextValue(Element element, String tagName) {
        String textVal = null;
        try {
            NodeList nodeList = element.getElementsByTagName(tagName);
            if (nodeList.getLength() > 0) {
                textVal = nodeList.item(0).getFirstChild().getNodeValue();

            }
        }
        catch (Exception e) {
            System.out.println("Error when parsing element <" + tagName + "> with value " + textVal);
        }
        return textVal;
    }

    public void printData() {
        for (Movie m: movies) {
            System.out.println(m);
        }
    }
    private int getIntValue(Element ele, String tagName) {
        // in production application you would catch the exception
        return Integer.parseInt(getTextValue(ele, tagName));
    }

    public static void main(String[] args) throws Exception {
        DomParser domParserExample = new DomParser();
        domParserExample.run();

    }
}
