package Search;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;


@WebFilter(filterName = "SearchFilter", urlPatterns = "/api/search")
public class SearchFilter implements Filter {

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        long startTime = System.nanoTime();
        chain.doFilter(request, response);
        long endTime = System.nanoTime();
        long elapsedTimeTS = endTime - startTime;
        FileWriter file = new FileWriter("F:\\School\\CS-122B\\cha-movies\\time-log\\timeTS.txt", true);
        file.write(String.valueOf(elapsedTimeTS)+"\n");
        file.close();
    }


}