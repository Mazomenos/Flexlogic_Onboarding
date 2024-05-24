import { ParseEDIfileTest } from "@/libs/X12parser/lib/parseEDIfileTest";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { fileName } = req.body;
    if (!fileName) {
      return res
        .status(400)
        .json({ success: false, message: "Nombre de archivo es requerido" });
    }

    try {
      // Llama a tu función ParseEDIfile aquí
      ParseEDIfileTest(fileName);
      res
        .status(200)
        .json({
          success: true,
          message: `Archivo ${fileName} procesado correctamente`,
        });
    } catch (error) {
      res
        .status(500)
        .json({
          success: false,
          message: "Error al procesar el archivo",
          error: (error as Error).message,
        });
    }
  } else {
    res.status(405).json({ success: false, message: "Método no permitido" });
  }
}
