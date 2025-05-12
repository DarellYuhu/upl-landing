import Image from "next/image";

type Props = {
  item: {
    imageSrc: string;
    nama: string;
    mesh?: string;
    diameter?: string;
    berat?: string;
    warna: string;
    aplikasi: string;
  };
};

export const ProductCard = ({ item }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <Image
        src={item.imageSrc}
        alt={item.nama}
        width={300}
        height={300}
        className="h-60 w-full object-cover"
      />
      <h4 className="text-center font-bold text-xl bg-[#0070bf] text-white p-3">
        {item.nama}
      </h4>
      <div className="p-4 bg-[#eaeaea]">
        <table>
          <tbody>
            {item.mesh && (
              <tr>
                <td>Mesh</td>
                <td className="p-1">:</td>
                <td>{item.mesh}</td>
              </tr>
            )}
            <tr>
              <td>Warna</td>
              <td className="p-1">:</td>
              <td>{item.warna}</td>
            </tr>
            <tr>
              <td>Aplikasi</td>
              <td className="p-1">:</td>
              <td>{item.aplikasi}</td>
            </tr>
            {item.diameter && (
              <tr>
                <td>Diameter</td>
                <td className="p-1">:</td>
                <td>{item.diameter}</td>
              </tr>
            )}
            {item.berat && (
              <tr>
                <td>Berat</td>
                <td className="p-1">:</td>
                <td>{item.berat}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
