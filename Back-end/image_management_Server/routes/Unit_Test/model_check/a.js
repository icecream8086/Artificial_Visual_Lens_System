const {validateInput_is_null_or_empty,validateInput_is_negative_number} =require("../../../lib/logic_module/checkBoolean.js");

try {
    validateInput_is_null_or_empty('1',2);
    validateInput_is_negative_number(1,2);
} catch (error) {
    
}