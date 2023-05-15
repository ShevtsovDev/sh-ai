import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as FormData from 'form-data';
import { ContentInterface } from './inerface/content.interface';

@Injectable()
export class ContentService {

  constructor(
    private readonly httpService: HttpService,
  ) {
  }

  async upload(icon: Express.Multer.File, token: string): Promise<ContentInterface[]> {
    try {
      const filePath = path.join(__dirname, 'image', icon.originalname);
      console.log(filePath);
      if (!fs.existsSync(path.join(__dirname, 'image'))) {
        fs.mkdirSync(path.join(__dirname, 'image'));
      }

      fs.writeFileSync(filePath, icon.buffer);
      const readedFile = fs.createReadStream(filePath);

      function createFormData(file) {
        const formData = new FormData();
        formData.append('files', fs.createReadStream(readedFile.path), {
          filename: file.originalname,
          contentType: file.mimetype,
          knownLength: file.size,
        });
        return formData;
      }

      const formData = createFormData(icon);


      const uploadedFile = await axios.post<ContentInterface[]>('https://dev.sellershub.ru/api/v1/upload', formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

      fs.rm(filePath, () => {})
      return uploadedFile.data;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

}
