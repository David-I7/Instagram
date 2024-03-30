const TermsOfService = () => {
  return (
    <>
      <input
        type="checkbox"
        id="termsOfService"
        name="termsOfService"
        value={"accepted"}
        className="mr-4"
      />
      <label htmlFor="termsOfService">
        I Agree with the{" "}
        <a href="/" className="text-blue-700 hover:underline">
          Terms Of Service
        </a>
      </label>
    </>
  );
};

export default TermsOfService;
