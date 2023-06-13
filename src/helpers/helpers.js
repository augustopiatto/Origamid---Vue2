export function mapFields(options) {
  const object = {}
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]]
    object[field] = {
      get () {
        return this.$store.state[options.file][options.base][field]
      },
      set (value) {
        this.$store.commit(`${options.file}/${options.mutation}`, { [field]: value })
      }
    }
  }
  return object
}
