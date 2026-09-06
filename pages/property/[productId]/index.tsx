import { useRouter } from "next/router";

const PropertyListDetail = () => {
  const router = useRouter()
  const { productId } = router.query
  return <div>Property Detail {productId}</div>
}

export default PropertyListDetail;