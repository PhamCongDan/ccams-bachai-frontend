export const CONTENT_TYPE_FILE = {
  EXCEL: 'application/vnd.openpip install xmlformats-officedocument.spreadsheetml.sheet',
  ZIP: 'application/zip'
}

export const FILE_EXTENSION = {
  PDF: '.pdf',
  EXCEL: '.xlsx',
  JPEG: '.jpg',
  ZIP: '.zip'
  }

export const downloadFileService = (data, name, typeFile) => {
  const blob = new Blob([data], { type: CONTENT_TYPE_FILE[typeFile] });
  const url = window.URL.createObjectURL(blob);
  let anchor = document.createElement('a');
  anchor.download = name + FILE_EXTENSION[typeFile];
  anchor.href = url;
  anchor.click();
}