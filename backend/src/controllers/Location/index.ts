import { Request, Response } from "express";
import { LocationService } from "../../services/Location";
import { getClientIp } from "request-ip";

export const LocationController = {
  async getClientLocation(req: Request, res: Response) {
    const location = new LocationService();

    try {
      const ip = getClientIp(req);
      const clientLocation = await location.getClientLocation(ip); 

      if (Object.keys(location.errors).length) {
        return res.status(400).send({ error: location.errors['invalidIp'].message });
      }

      return res.json(clientLocation);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  }
}
