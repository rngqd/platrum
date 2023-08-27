export function updatePeopleList(
  array,
  selectedName,
  selectedPhone,
  newPerson
) {
  for (let i = 0; i < array.length; i++) {
    const obj = array[i]

    if (
      obj.name.trim() === selectedName &&
      obj.phone.trim() === selectedPhone
    ) {
      newPerson.level = obj.level + 1
      if (obj.children) {
        obj.children = [...obj.children, newPerson]
      } else {
        obj.children = [newPerson]
      }
      return
    }
    if (obj.children) {
      updatePeopleList(obj.children, selectedName, selectedPhone, newPerson)
    }
  }
}
