package pe.cibertec.proyecto;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class Generar {

	
	public static String  code() {
		return new SimpleDateFormat("ddMyyyhhmmss").format(new Date()) + new Random().nextLong();
	}
}
