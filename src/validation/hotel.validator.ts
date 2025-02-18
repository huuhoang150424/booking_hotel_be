import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import {ValidationError} from '../helper'; 

const validatorAddHotel = [
	check('name').notEmpty().withMessage('Tên khách sạn không được để trống'),
  check('location').notEmpty().withMessage('Địa điểm không được để trống'),
  check('description').notEmpty().withMessage('Mô tả không được để trống'),
  check('maxRooms')
    .isInt({ gt: 0 })
    .withMessage('Số phòng tối đa phải là số nguyên dương'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError(errors,400);
    }
    next(); 
  },
];

export {
  validatorAddHotel
};
