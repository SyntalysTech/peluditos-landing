import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, clinica, telefono, mensaje } = await request.json();

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Enviar email a contact@peluditos.eu
    const { data, error } = await resend.emails.send({
      from: "Peluditos Web <noreply@peluditos.eu>",
      to: ["contact@peluditos.eu"],
      subject: `Nuevo contacto de ${nombre} - ${clinica || "Sin clínica"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f68b44; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Nuevo contacto desde la web</h1>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #f68b44; padding-bottom: 10px;">Datos del contacto</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Nombre:</td>
                <td style="padding: 10px 0; color: #333;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: #f68b44;">${email}</a></td>
              </tr>
              ${clinica ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Clínica:</td>
                <td style="padding: 10px 0; color: #333;">${clinica}</td>
              </tr>
              ` : ""}
              ${telefono ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Teléfono:</td>
                <td style="padding: 10px 0; color: #333;"><a href="tel:${telefono}" style="color: #f68b44;">${telefono}</a></td>
              </tr>
              ` : ""}
            </table>
            <h2 style="color: #333; border-bottom: 2px solid #f68b44; padding-bottom: 10px; margin-top: 30px;">Mensaje</h2>
            <p style="color: #333; line-height: 1.6; background: white; padding: 15px; border-radius: 8px;">${mensaje.replace(/\n/g, "<br>")}</p>
          </div>
          <div style="background-color: #333; padding: 15px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto de peluditos.eu</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
