import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGraduationCap,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export function setupFontAwesome() {
  library.add(
    faGraduationCap,
    faChevronRight,
  )
}
