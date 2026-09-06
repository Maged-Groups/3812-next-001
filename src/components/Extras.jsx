export default function Extras() {
  const appName = "My First App";

  const appVersion = "1.0.1";

  return (
    <>
      <h1 className="font-main font-extrabold">عنوان الصفحة</h1>
      <p className="font-main font-extralight">
        ولما كان تناسي حقوق الإنسان وازدراؤها قد أفضيا إلى أعمال همجية
      </p>

      {5 + 4}

      <p>{`The App Version is:  ${appVersion}`}</p>

      <p>{appName}</p>
    </>
  );
}
