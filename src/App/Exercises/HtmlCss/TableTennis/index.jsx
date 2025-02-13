import './styles.css';

import { StarIcon } from '../../../Components/Icons/StarIcon';

export function Exercise() {
  return (
    <table className="table-players">
      <tr>
        <th className="table-location">Location</th>

        <th className="table-player">PLAYER_ID</th>

        <th className="table-rating">Rating</th>
      </tr>

      <tr>
        <td className="table-location">Cape Verde Islands</td>

        <td className="table-player">#100120</td>

        <td className="table-rating">
          <StarIcon />

          <StarIcon />
        </td>
      </tr>

      <tr>
        <td className="table-location">Cape Verde Islands</td>

        <td className="table-player">#100122</td>

        <td className="table-rating">
          <StarIcon />

          <StarIcon />

          <StarIcon />
        </td>
      </tr>

      <tr>
        <td className="table-location">Cape Verde Islands</td>

        <td className="table-player">#100124</td>

        <td className="table-rating">
          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />
        </td>
      </tr>

      <tr>
        <td className="table-location">United States of America</td>

        <td className="table-player">#100126</td>

        <td className="table-rating">
          <StarIcon />
        </td>
      </tr>

      <tr>
        <td className="table-location">United States of America</td>

        <td className="table-player">#100128</td>

        <td className="table-rating">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </td>
      </tr>
    </table>
  );
}
