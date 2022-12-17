import * as Yup from "yup";

const userSchema = Yup.object({
  name: Yup.string().required("Adın nedir?"),
  surname: Yup.string().required("Adın nedir?"),
  email: Yup.string()
    .required(
      "Giriş yaparken ve şifreni yenilemen gerekirse bunu kullanacaksın."
    )
    .email("Giriş yaparken ve şifreni yenilemen gerekirse bunu kullanacaksın."),
  password: Yup.string().required(
    "İçinde en az altı rakam,harf ve noktalama işareti (! ve & gibi) bulunan bir şifre gir."
  ),
  day: Yup.number().required(
    "Görünüşe göre yanlış bilgiler girdin. Lütfen gerçek doğum tarihini kullandığından emin ol."
  ),
  month: Yup.string().required(
    "Görünüşe göre yanlış bilgiler girdin. Lütfen gerçek doğum tarihini kullandığından emin ol."
  ),
  year: Yup.number()
    .required(
      "Görünüşe göre yanlış bilgiler girdin. Lütfen gerçek doğum tarihini kullandığından emin ol."
    )
    .max(
      2017,
      "Görünüşe göre yanlış bilgiler girdin. Lütfen gerçek doğum tarihini kullandığından emin ol."
    ),
  gender: Yup.string().required(),
});

export default userSchema;
