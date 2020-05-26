// 验证手机号码
export const checkPhoneNumber = (rule, value, callback) => {
  const reg = /^1[3|4|5|6|7|8|9]\d{9}$/;
  if (!value) {
    return callback(new Error('请填写手机号码'))
  } else if (!reg.test(value)) {
    return callback(new Error('请填写正确的手机号码'))
  }else{
    callback()
  }
}
// 验证身份证
export const checkIdNum = (rule, value, callback) => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (!value) {
    return callback(new Error('证件号码不能为空'))
  } else if (!reg.test(value)) {
    return callback(new Error('证件号码不正确'))
  } else {
    callback()
  }
}

export default {
  checkPhone: [
    { required: true, validator: checkPhoneNumber, trigger: 'blur' }
  ],
  checkPwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
  ],
  checkId: { required: true, validator: checkIdNum, trigger: 'blur' },
}