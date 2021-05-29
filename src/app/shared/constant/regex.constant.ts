export class Regex {
  public static readonly PASSWORD_PATTERN: any = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/;
  public static readonly NAME_PATTERN = /^[a-zA-Z0-9 \[\]^\/_\-\n]{2,200}$/;
  public static readonly USER_NAME_PATTERN = /^[a-zA-Z]{3,200}$/;
  public static readonly USER_PATTERN = /^[a-zA-Z ]{3,200}$/;
  public static readonly PHONE_PATTERN = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;
  public static readonly DESCRIPTION_PATTERN = /^[a-zA-Z0-9 \[\]()-,^\/_\-\n]{5,400}$/;
  public static readonly FLAT_STRING_PATTERN = /^[a-zA-Z \[\]^\/]{2,200}$/;
  public static readonly AREA_PIN_CODE = /^([0-9]{4,10}\s*)+/;
	public static readonly NUMBER_PATTERN = /^[0-9]*$/;
	public static readonly HOUR_PATTER = /\b([0-9]|1[0-9]|2[0-4])\b/;
	public static readonly FLOAT_NUMBER_PATTERN = /^[0-9.]*$/;
	public static readonly ALPHANUMERIC_NAME_PATTERN = /^[a-zA-Z0-9 \[\]()-.,;:!&@#%$^\/_\-\n]{2,200}$/;
	public static readonly VERIFICATION_CODE_PATTERN = /([a-zA-Z0-9]{8,30}\s*)+/;
  public static readonly RESET_PASSWORD_CODE_PATTERN = /([a-zA-Z0-9]{4,30}\s*)+/;
  public static readonly DATE_PATTERN = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
  public static readonly EMAIL_PATTERN = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
}
