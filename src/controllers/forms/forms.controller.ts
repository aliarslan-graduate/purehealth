import {Request, Response} from 'express';
import {FormsService} from '../../services';
import {SuccessResponse} from '../../util';

export class FormsController {
  public static async create(req: Request, res: Response): Promise<void> {
    const formsService = new FormsService();
    const data = req.body;
    const result = await formsService.create(data);
    const response = new SuccessResponse(res, 'success', result);
    response.send();
  }

  public static async getForm(req: Request, res: Response): Promise<void> {
    const formsService = new FormsService();
    const formId = req.params.id;
    const checkFormRecord = await formsService.findFormRecord(formId);
    const response = new SuccessResponse(res, 'success', checkFormRecord);
    response.send();
  }

  public static async getAllForms(req: Request, res: Response): Promise<void> {
    const formsService = new FormsService();
    const checkFormRecords = await formsService.findFormRecords();
    const response = new SuccessResponse(res, 'success', checkFormRecords);
    response.send();
  }

  public static async deleteForm(req: Request, res: Response): Promise<void> {
    const formsService = new FormsService();
    const formId = req.params.id;
    const result = await formsService.deleteFormRecord(formId);
    const response = new SuccessResponse(res, 'success', result);
    response.send();
  }

  public static async update(req: Request, res: Response): Promise<void> {
    const formsService = new FormsService();
    const formId = req.params.id;
    const data = req.body;

    const checkFormRecord = await formsService.update({
      id: formId,
      name: data.name,
      data: data.data,
    });
    const response = new SuccessResponse(res, 'success', checkFormRecord);
    response.send();
  }
}
