package webServlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.time.ZoneId;
import java.util.Date;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class BindData
 */
public class BindData extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public BindData() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter write = response.getWriter();
		
		String userName=request.getParameter("username");
		String password=request.getParameter("pwd");
		if(userName.equals("Shiv") && password.equals("shiv123"))
		{
			write.println("Hey,"+request.getParameter("username")+" ,Welcom to You...");
			write.println("Login successfully");
			Date date = new Date();  
			java.sql.Timestamp ts = new java.sql.Timestamp(date.getTime());
			SimpleDateFormat formatter = new SimpleDateFormat("HH:mm:ss a");  
			write.println("Time : "+formatter.format(ts)); 
			ZoneId zone = ZoneId.systemDefault();
			write.println("Location : "+zone);
		}
		else
		{
			write.println("Username or password incorrect...");
		}
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
